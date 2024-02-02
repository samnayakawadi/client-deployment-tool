import { encryptText } from "./jasypt.js";

const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string, isEncoded = false) => {
  return (string === "" || string === undefined || string === null) ? noURLString : (isEncoded ? `ENC(${encryptText(string)})` : string)
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
    keycloak.auth-server-url=${noURLProvidedString(services.keycloak.serverUrl, true)}
    keycloak.realm=${noURLProvidedString(services.keycloak.realm, true)}
    keycloak.resource=${noURLProvidedString(services.keycloak.resource, true)}
    
    # Dynamic - MongoDB
    spring.data.mongodb.host=${noURLProvidedString(database.mongo.host, true)}
    spring.data.mongodb.authentication-database=${noURLProvidedString(database.mongo.authenticationDatabase, true)}
    spring.data.mongodb.username=${noURLProvidedString(database.mongo.username, true)}
    spring.data.mongodb.password=${noURLProvidedString(database.mongo.password, true)}
    
    # Dynamic - Services
    ngel.course-catalog.url=${noURLProvidedString(services.services.courseCatalog, true)}
    assessment.quiz.authoring=${noURLProvidedString(services.services.quizAuthoring, true)}
    image.sanitizer=${noURLProvidedString(services.services.imageSanitizer, true)}
    
    #Dynamic - Files
    qti.upload.url=${noURLProvidedString(services.uploads.assessmentQTIUpload, true)}
    file.upload.url=${noURLProvidedString(services.uploads.assessmentFileUpload, true)}
  `;

  return properties
}