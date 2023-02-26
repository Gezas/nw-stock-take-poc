import './SelfServiceHeader.component.css';
import { useEffect } from 'react';

function SelfServiceHeader(props) {
  const breadCrumbs = props.props.breadCrumbs;
  const category = props.props.category;
  useEffect(() => {
    console.log(props.props);
  })

  const getBreadCrumb = () => {
    let breadCrumbEl = [];
    for(let crumb of breadCrumbs){
      breadCrumbEl.push(<div>{crumb} / </div>)
    }
  }

  return (
    <div className="SelfServiceHeaderContainer">
      <div className='BreadCrumbs'>{breadCrumbs}</div>
      <div className='ActiveCategory'>{category}</div>
    </div>
  );
}

export default SelfServiceHeader;
