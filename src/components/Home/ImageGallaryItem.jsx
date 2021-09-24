export const ImageGallaryItem = (props) => {
  return (
<<<<<<< HEAD
    <a href="{props.wikiUrl" target="_blank">
      <table>
        <tr>
          <td>
            <img
              src= {props.imgUrl}
              alt={props.title}
              width="180px"
            />
=======
    <a href={props.wikiUrl} target="_blank">
      <table>
        <tr>
          <td>
            <img src={props.imgUrl} alt={props.title} width="180px" />
>>>>>>> 0a206cafb42fb30cb0cbf3c8f96eb0e6e3494c9c
          </td>
        </tr>
        <tr>
          <td>
            <b>{props.title}</b>
          </td>
        </tr>
      </table>
    </a>
  );
};
