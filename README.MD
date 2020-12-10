#GRAPHQL API

Esta es una pequeña api realizada con Apollo Server.

##Queries de consulta

{
###Muestra todos los usuarios
getUsers{
id
name
email
gender
}
###MUestra solo un usario que pasemos su id
getUser(id: ID!){
id
name
email
gender
}
}
