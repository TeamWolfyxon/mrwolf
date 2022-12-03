async function run() {
    await interaction.deferReply()

    const tag = interaction.options.getString('tag') + ".mp4";
    const dir = "./data/files/memes/"
    var memes = []//JSON.parse(fs.readFileSync("./data/memes.json"))
    fs.readdirSync(dir).forEach(file => {
        memes.push(file)
    });
    if (memes.includes(tag)) {

        var path = dir + tag
        const file = new MessageAttachment(path);
        await interaction.followUp({files: [file]})
    } else {

        var tag_ = memes[random(0, memes.length)].replace(".mp4","")
        if (tag_) {
            var tip = tag_.split("")[0] + tag_.split("")[1] + "..."
            if (tag_.length < 5) {
                tip = tip.replace("...", "")
            }
            await interaction.followUp({content: 'Meme not found. TIP: **' + tip + "**", ephemeral: true});
        } else {
            await interaction.followUp({content: "Meme not found.", ephemeral: true});
        }
    }
}
run()