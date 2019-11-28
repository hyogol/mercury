import React, {useEffect, useRef} from 'react';

import './index.scss';

export default function MercuryRenderContainer(props) {
  const {Container, onUpdateRender} = props;
  const renderRef = useRef();

  useEffect(() => {
    const render = renderRef.current;
    if (render) {
      render.addEventListener('DOMSubtreeModified',
        (e) => {
          if (e && e.target) {
            onUpdateRender(e.target.innerHTML);
          }
        });
    }
  }, [renderRef.current]);
  const onClick = (e) => console.log(Container);
  return <div id={`html-${Container.id}`} ref={renderRef}
              className={`mercury-render-container`} onClick={onClick}>
    {Container.render && Container.render.html ? <div dangerouslySetInnerHTML={{ __html: Container.render.html }} /> : null}
  </div>;
}
