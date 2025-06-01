/**
 * Joy.css - Sistema de Classes Dinâmicas
 * Permite usar qualquer valor em width, height, padding, margin
 */

function initJoyDynamic() {
    console.log('🎉 Joy.css Dynamic carregado!');
    
    applyDynamicClasses();
    
    observeNewElements();
  }
  
  function applyDynamicClasses() {
    const elements = document.querySelectorAll('[class]');
    
    elements.forEach(processElement);
  }
  
  function processElement(element) {
    const classes = element.className.split(' ');
    
    classes.forEach(className => {
      // WIDTH
      if (className.match(/^w-\d+px$/)) {
        const value = className.match(/^w-(\d+)px$/)[1];
        element.style.width = value + 'px';
        return;
      }
      
      if (className.match(/^w-\d+per$/)) {
        const value = className.match(/^w-(\d+)per$/)[1];
        element.style.width = value + '%';
        return;
      }
      
      if (className.match(/^w-\d+vw$/)) {
        const value = className.match(/^w-(\d+)vw$/)[1];
        element.style.width = value + 'vw';
        return;
      }
      
      // HEIGHT
      if (className.match(/^h-\d+px$/)) {
        const value = className.match(/^h-(\d+)px$/)[1];
        element.style.height = value + 'px';
        return;
      }
      
      if (className.match(/^h-\d+vh$/)) {
        const value = className.match(/^h-(\d+)vh$/)[1];
        element.style.height = value + 'vh';
        return;
      }
      
      if (className.match(/^h-\d+per$/)) {
        const value = className.match(/^h-(\d+)per$/)[1];
        element.style.height = value + '%';
        return;
      }
      
      // PADDING DINÂMICO
      if (className.match(/^p-\d+px$/)) {
        const value = className.match(/^p-(\d+)px$/)[1];
        element.style.padding = value + 'px';
        return;
      }
      
      if (className.match(/^px-\d+px$/)) {
        const value = className.match(/^px-(\d+)px$/)[1];
        element.style.paddingLeft = value + 'px';
        element.style.paddingRight = value + 'px';
        return;
      }
      
      if (className.match(/^py-\d+px$/)) {
        const value = className.match(/^py-(\d+)px$/)[1];
        element.style.paddingTop = value + 'px';
        element.style.paddingBottom = value + 'px';
        return;
      }
      
      // MARGIN DINÂMICO
      if (className.match(/^m-\d+px$/)) {
        const value = className.match(/^m-(\d+)px$/)[1];
        element.style.margin = value + 'px';
        return;
      }
      
      if (className.match(/^mb-\d+px$/)) {
        const value = className.match(/^mb-(\d+)px$/)[1];
        element.style.marginBottom = value + 'px';
        return;
      }
      
      if (className.match(/^mt-\d+px$/)) {
        const value = className.match(/^mt-(\d+)px$/)[1];
        element.style.marginTop = value + 'px';
        return;
      }
    });
  }
  
  function observeNewElements() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.className) {
            processElement(node);
            
            const children = node.querySelectorAll('[class]');
            children.forEach(processElement);
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJoyDynamic);
  } else {
    initJoyDynamic();
  }