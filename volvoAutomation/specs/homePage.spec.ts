import { WebActions } from "../common/webActions";
import { HomePage } from "../pages/homePage"

const home = new HomePage();
const action = new WebActions();
describe("Home Page In VolvoPage", () => {
    beforeAll(async () => {
        await action.navigationToWebApp();
        await action.assertTitle("A million more | Volvo Cars - International");
    });
    it('accept the terms', async () => {
        await home.acceptClick();
    })
    it("Validate the header in Volvo Home Page", async () => {
        await home.validateHeaders();
    });
    it("Validate the headers in Menu bar", async () => {
        await home.clickMenu();
    });
    it("close Menu bar", async () => {
        await home.closeMenuBar();
    });
    it("Play the video", async () => {
        await home.clickWatchStory();
    });
})