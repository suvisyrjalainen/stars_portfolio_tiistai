function Element(props) {
  return(
    <div class="element">
        <h2>{props.projekti }</h2>
        <img src={props.image} alt="project_image"/>
        <p>{props.text}</p>
        <a href={props.link} class="btn btn-dark">Linkki projektiin</a>
    </div>);
  }

export default Element;
