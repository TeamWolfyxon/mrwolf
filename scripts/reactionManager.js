
function getRole(reaction){
    var reaction_roles = JSON.parse(fs.readFileSync("./data/dynamic/reactionRoles.json"))
    if(reaction.message.id in reaction_roles){
        msgReactionData = reaction_roles[reaction.message.id]
        if(reaction.emoji.name in msgReactionData){
            return msgReactionData[reaction.emoji.name]
        }
    }
}

client.on('messageReactionAdd', (reaction, user) => {
    const member = reaction.message.guild.members.cache.get(user.id)
    const role = getRole(reaction)
    if(role==null || role==undefined){return}
    if(member.roles.cache.has(role)){return}
    member.roles.add(role)

})
client.on('messageReactionRemove', (reaction, user) => {
    const member = reaction.message.guild.members.cache.get(user.id)
    const role = getRole(reaction)
    if(role==null || role==undefined){return}
    if(!member.roles.cache.has(role)){return}
    member.roles.remove(role)
})