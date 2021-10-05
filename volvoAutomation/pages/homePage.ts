import { by, element } from "protractor"
import { WebActions } from "../common/webActions"

export class HomePage extends WebActions {
    public volvoHeader = element(by.xpath("(//img[@alt='Volvo'])[2]"));
    public ourCars = element(by.xpath("//em[text()='Our Cars']"));
    public menuBar = element(by.xpath("//span[@data-testid='burger']"));
    public watchStory = element(by.xpath("//button[text()='watch the story']"));
    public buyBtn = element(by.xpath("//em[text()='Buy']"));
    public ownBtn = element(by.xpath("//em[text()='Own']"));
    public aboutVolvoBtn = element(by.xpath("//em[text()='About Volvo']"));
    public exploreBtn = element(by.xpath("//em[text()='Explore']"));
    public moreBtn = element(by.xpath("//em[text()='More']"));
    public videoAction = element(by.className("//button[@class='ytp-play-button ytp-button']"));
    public closeBtn = element(by.xpath("//span[@data-testid='close']"));
    public internationalBtn = element(by.xpath("//p[text()='International']"));
    public learnMore = element(by.linkText('Learn more'));
    public accept = element(by.xpath("//button[.='Accept']"));
    async acceptClick() {
        await this.click(this.accept);
    }
    async validateHeaders() {
        await this.assertTrue(this.volvoHeader);
        await this.assertTrue(this.ourCars);
        await this.assertTrue(this.menuBar);
        await this.assertTrue(this.watchStory);
    }
    async clickMenu() {
        await this.click(this.menuBar);
        await this.assertTrue(this.buyBtn);
        await this.assertTrue(this.ownBtn);
        await this.assertTrue(this.aboutVolvoBtn);
        await this.assertTrue(this.exploreBtn);
        await this.assertTrue(this.moreBtn);
        await this.assertTrue(this.internationalBtn);
        await this.assertTrue(this.closeBtn);
    }
    async closeMenuBar() {
        await this.click(this.closeBtn);
    }
    async clickWatchStory() {
        await this.click(this.watchStory);
    }
    async clickLearnMore() {
        await this.jsClick(this.learnMore)
        await this.assertTitle('Safety innovations | Volvo Cars');
    }
}