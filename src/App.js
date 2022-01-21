import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CreateBooks from "./pages/Create/CreateBooks";
import WriterBenefit from "./pages/WriterBenefit/WriterBenefit";
import Contest from "./pages/Contest/Contest";
import BrowseNavbar from "./pages/Browse/BrowseNavbar/BrowseNavbar";
import Library from "./pages/Library/Library";
import Footer from "./Components/Footer/Footer";
import CEO from "./pages/Browse/CEO/CEO";
import Fentasy from "./pages/Browse/Fentasy/Fentasy";
import Marriage from "./pages/Browse/Marriage/Marriage";
import Paranormal from "./pages/Browse/Paranormal/Paranormal";
import Romance from "./pages/Browse/Romance/Romance";
import Werewolf from "./pages/Browse/Werewolf/Werewolf";
// import PageNotFound from "./Components/404/PageNotFound";
// Footer Pages
import About from "./pages/FooterPages/About us/Aboutus";
import Business from "./pages/FooterPages/Busniness/Business";
import DMCA from "./pages/FooterPages/DMCA/DMCA";
import FAQs from "./pages/FooterPages/FAQ/FAQs";
import ContactDetail from "./pages/FooterPages/ContactDetail/ContactDetail";
import ContentPolicy from "./pages/FooterPages/ContentPolicy/ContentPolicy";
import AuthorBrand from "./pages/FooterPages/AuthorBrand/AuthorBrand";
import TermsOfUse from "./pages/FooterPages/TermsOfUse/TermsOfUse";
import WebMap from "./pages/FooterPages/WebMap/WebMap";
import Privacy from "./pages/FooterPages/PrivacyPolicy/PrivacyPolicy";
// import { ScrollToTop } from "react-router-scroll-to-top";
import ScrollToTop from "react-scroll-to-top";
import AuthorProject from "./pages/AuthorProject/AuthorProject";

const App = () => {
  return (
    <>
      <Router basename="/demo/">
        <div>
          <Navbar />
          <ScrollToTop smooth    />
     
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/" component={Home} />
            <Route exact path="/browse" component={BrowseNavbar} />
            <Route exact path="/create" component={CreateBooks} />
            <Route exact path="/writer-benefit" component={WriterBenefit} />
            <Route exact path="/contest" component={Contest} />
            <Route exact path="/library" component={Library} />
            <Route exact path="/ceo" component={CEO} />
            <Route exact path="/fentasy" component={Fentasy} />
            <Route exact path="/marriage" component={Marriage} />
            <Route exact path="/paranormal" component={Paranormal} />
            <Route exact path="/romance" component={Romance} />
            <Route exact path="/werewolf" component={Werewolf} />
            <Route exect path="/author-project" component={AuthorProject} />
            {/* <Route component={PageNotFound} /> */}
            <Route exact path="/aboutus" component={About} />
            <Route exact path="/business" component={Business} />
            <Route exact path="/dmca" component={DMCA} />
            <Route exact path="/faqs" component={FAQs} />
            <Route exact path="/contact-details" component={ContactDetail} />
            <Route exact path="/content-policy" component={ContentPolicy} />
            <Route exact path="/author-brand" component={AuthorBrand} />
            <Route exact path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/webmap" component={WebMap} />
            <Route exact path="/Privacypolicy" component={Privacy} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
