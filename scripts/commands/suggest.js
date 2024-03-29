const description = interaction.options.getString('description');
//const file = interaction.options.getAttachment("attachment"); //Type is 11
interaction.reply({content: "This command is no longer in use! Suggestions has been moved to a forum channel <#1019651485358882997>",ephemeral: true})

if(false){ //return gives an error, commenting doesnt comment the whole code
if(description.split(" ").length > 3){
    var channel = client.channels.cache.get(channels["suggestions"])
    var buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('sg_accept')
            .setLabel('✅')
            .setStyle('SUCCESS'),
    )
    .addComponents(
        new MessageButton()
            .setCustomId('sg_reject')
            .setLabel('❌')
            .setStyle('DANGER'),
    );
    
    channel.send({content:"<@!"+interaction.member.user.id+">",embeds:[{
        "title":"💡 "+interaction.member.user.username+"'s suggestion",
        "description":description,
        "color":"#FFFF00"
    }],components: [buttons]/*,files:[file]*/})
    .then(message => {
        interaction.reply({ content: "Your suggestion has been successfully posted on <#"+channels["suggestions"]+">"});
        message.react("👍")
        message.react("👎")

        message.startThread({name:"Comments",autoArchiveDuration: 1440})
    })
}
else {
    interaction.reply({ content: "Your suggestion is too short! Describe it more", ephemeral: true });
}
}