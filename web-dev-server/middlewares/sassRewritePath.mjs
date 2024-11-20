export default function sassRewritePath(context, next){
    if(context.url.match(/.*\.scss/)){
        context.status = 301;
        context.redirect('./styles-for-demo-app.css');
        context.body = 'Redirecting to test css file'
    }
    return next();
}