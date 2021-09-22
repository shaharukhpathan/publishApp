import { Personalinfo } from "./Home/Personalinfo";
import { Professionalinfo } from "./Home/Professionalinfo";
import { ImageGallary } from "./Home/ImageGallary";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <Personalinfo />
          </td>
          <td>
            <Professionalinfo />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <ImageGallary />
          </td>
        </tr>
      </table>
    </div>
  );
};
