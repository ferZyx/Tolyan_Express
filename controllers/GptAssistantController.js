import ApiError from "../exceptions/apiError.js";
import gptAssistantService from "../services/GptAssistantService.js";
import log from "../logging/logging.js";
import fs from "fs";
import {v4 as uuidv4} from "uuid";

class GptAssistantController{
    async getAnswerByScreenshot(req, res, next) {
        try {
            const {image} = req.body;
            console.log(image)
            if (!image) {
                return next(ApiError.BadRequest("Необходимо передать скриншот"))
            }

            const imgData = image.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(imgData, 'base64');
            const newFileName = uuidv4()
            fs.mkdirSync('gpt-input-pictures', {recursive: true})
            fs.writeFileSync(`gpt-input-pictures/${newFileName}.png`, buffer, 'utf-8')

            return res.json({fileName: newFileName});
            // const answer = await gptAssistantService.getAnswerByScreenshot(image, new);
            // return res.json(answer);
        } catch (e) {
            log.error("Ошибка при получении ответа на скриншот: ", e)
            next(e)
        }
    }
}

export default new GptAssistantController()