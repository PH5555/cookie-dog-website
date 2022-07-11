import "./AllCookies.css";
import CookieCard from "../components/CookieCard";

const AllCookies = () => {
  return (
    <div className="View-Cookies-Area">
      <div className="Cookies">
        <div className="Cookies-Title">ALL COOKIES</div>
        <div className="Cookies-List">
          <CookieCard />
        </div>
      </div>
    </div>
  );
};

export default AllCookies;
