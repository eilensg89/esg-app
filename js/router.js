(function(){
  const state={route:'home',params:{},stack:[]};
  function snapshot(){return {route:state.route,params:{...state.params}}}
  function navigate(route,params={},opts={}){
    if(!opts.replace && state.route){state.stack.push(snapshot())}
    state.route=route; state.params={...params};
    const payload={route,params:state.params};
    if(opts.replace) history.replaceState(payload,'',location.pathname+'#'+route); else history.pushState(payload,'',location.pathname+'#'+route);
    window.dispatchEvent(new CustomEvent('esg:navigate',{detail:payload}));
  }
  function goBack(){
    if(state.stack.length){const prev=state.stack.pop(); state.route=prev.route; state.params=prev.params; history.pushState(prev,'',location.pathname+'#'+prev.route); window.dispatchEvent(new CustomEvent('esg:navigate',{detail:prev}));}
    else navigate('home',{}, {replace:true});
  }
  function resetFamily(){state.params={};}
  function startService(family,service){navigate('service',{family,service});}
  window.addEventListener('popstate',e=>{const p=e.state||{route:'home',params:{}};state.route=p.route;state.params=p.params||{};window.dispatchEvent(new CustomEvent('esg:navigate',{detail:p}));});
  window.ESG_ROUTER={state,navigate,goBack,resetFamily,startService};
})();
