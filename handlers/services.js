import { encryptText } from "./jasypt.js";

const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string, isEncoded = false) => {
  return (string === "" || string === undefined || string === null) ? noURLString : (isEncoded ? encryptText(string) : string)
}

export const questionAuthoringProperties = (data) => {

  const { services, database } = data

  const properties = `
    #Static - Default
    spring.data.mongodb.port=27017
    tomcat.ajp.enabled=true
    server.error.whitelabel.enabled=false
    spring.servlet.multipart.enabled=true
    keycloak.bearer-only=true
    keycloak.ssl-required=external
    tomcat.ajp.remoteauthentication=false
    spring.servlet.multipart.max-file-size=50MB
    tomcat.ajp.secret=tmis123$
    keycloak.public-client=true
    keycloak.use-resource-role-mappings=true
    spring.servlet.multipart.max-request-size=100MB
    spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration

    # Static - Databases
    spring.data.mongodb.database.questionAuthoring=questionDatabase
    
    # Static - Port
    tomcat.ajp.port.questionAuthoring=9093 
    server.port.questionAuthoring=8093
    
    # Dynamic - Keycloak
    keycloak.auth-server-url=${noURLProvidedString(services.keycloak.serverUrl, false)}
    keycloak.realm=${noURLProvidedString(services.keycloak.realm, false)}
    keycloak.resource=${noURLProvidedString(services.keycloak.resource, false)}
    
    # Dynamic - MongoDB
    spring.data.mongodb.host=${noURLProvidedString(database.mongo.host, false)}
    spring.data.mongodb.authentication-database=${noURLProvidedString(database.mongo.authenticationDatabase, false)}
    spring.data.mongodb.username=${noURLProvidedString(database.mongo.username, false)}
    spring.data.mongodb.password=${noURLProvidedString(database.mongo.password, false)}
    
    # Dynamic - Services
    ngel.course-catalog.url=${noURLProvidedString(services.services.courseCatalog, false)}
    assessment.quiz.authoring=${noURLProvidedString(services.services.quizAuthoring, false)}
    image.sanitizer=${noURLProvidedString(services.services.imageSanitizer, false)}
    
    #Dynamic - Files
    qti.upload.url=${noURLProvidedString(services.uploads.assessmentQTIUpload, false)}
    file.upload.url=${noURLProvidedString(services.uploads.assessmentFileUpload, false)}
  `;

  return properties
}