module.exports = async function (context) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const dreidel = ['ג','ה','ש','נ'];
    const randomNumber = Math.floor(Math.random() * 4);
    const spinDriedrel = dreidel[randomNumber];

    context.res = {
        body: spinDriedrel
    }

};
