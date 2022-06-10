const request = require("request")

const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus",cb);

function cb(error,response, html)
{
    if(error)
    {
        console.log("error",error);
    }
    else
    {
        handleHtml(html)
    }
}

function handleHtml(html)
{
    let selTool = cheerio.load(html);

    let arr = selTool("#maincounter-wrap span");

    for(let i=0; i<arr.length; i++)
    {
        let data = selTool(arr[i]).text();

        console.log("data ",data);
    }

    // console.log("h1s count",h1s.length)
}