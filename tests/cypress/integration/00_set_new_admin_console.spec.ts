import LoginPage from "../support/pages/LoginPage";
import WelcomePage from "../support/pages/WelcomePage";
import OldClientPage from "../support/pages/admin_console/manage/clients/OldClientPage";

const loginPage = new LoginPage();
const welcomePage = new WelcomePage();
const oldClientPage = new OldClientPage();

describe("Set up test", function () {
  beforeEach(function () {
    cy.visit("http://localhost:8180/auth");
  });

  it("Create admin user and adds admin console client", function () {
    welcomePage.createAdminUser().goToAdminConsole();

    loginPage.logIn();

    oldClientPage.goToClients().addNewAdminConsole();
  });
});
