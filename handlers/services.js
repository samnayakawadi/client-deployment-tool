import { encryptText } from "./jasypt.js";

const noURLString = "<NO DATA PROVIDED YET>"

const noURLProvidedString = (string, isEncoded = false) => {
  return (string === "" || string === undefined || string === null) ? noURLString : (isEncoded ? `ENC(${encryptText(string)})` : string)
}

export const questionAuthoringProperties = (data) => {

  const { ui, services, database } = data

  const properties = `
    #Static - Default
    spring.data.mongodb.port=27017
    tomcat.ajp.enabled=true
    server.error.whitelabel.enabled=false
    spring.servlet.multipart.enabled=true
    keycloak.bearer-only=true
    keycloak.ssl-required=external
    tomcat.ajp.remoteauthentication=false
    tomcat.ajp.secret=tmis123$
    keycloak.public-client=true
    keycloak.use-resource-role-mappings=true
    spring.servlet.multipart.max-file-size=50MB
    spring.servlet.multipart.max-request-size=100MB
    spring.servlet.multipart.max-file-size[5]=50MB
    spring.servlet.multipart.max-request-size[4]=100MB
    spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration

    # Static - Databases
    spring.data.mongodb.database.questionauthoring=questionDatabase
    spring.data.mongodb.database.quizauthoring=quizDatabase
    spring.data.mongodb.database.delivery=deliveryDatabase
    spring.data.mongodb.database.quizadmin=adminDatabase
    
    # Static - Port
    tomcat.ajp.port.questionauthoring=9093 
    tomcat.ajp.port.quizauthoring=9094
    tomcat.ajp.port.delivery=9095 
    tomcat.ajp.port.quizadmin=9096
    server.port.questionauthoring=8093
    server.port.quizauthoring=8094
    server.port.delivery=8095
    server.port.quizadmin=8096

    # Static - Admin
    ui.admin.seb.arcane.url = ${noURLProvidedString(ui.home.seb + "/arcane", false)}
    seb.url = https://safeexambrowser.org/download
    mobile.admin.key = ${noURLProvidedString("cdac@123", true)}
    
    # Dynamic - Keycloak
    keycloak.auth-server-url=${noURLProvidedString(services.keycloak.serverUrl, true)}
    keycloak.realm=${noURLProvidedString(services.keycloak.realm, true)}
    keycloak.resource=${noURLProvidedString(services.keycloak.resource, true)}
    
    # Dynamic - MongoDB
    spring.data.mongodb.host=${noURLProvidedString(database.mongo.host, true)}
    spring.data.mongodb.authentication-database=${noURLProvidedString(database.mongo.authenticationDatabase, true)}
    spring.data.mongodb.username=${noURLProvidedString(database.mongo.username, true)}
    spring.data.mongodb.password=${noURLProvidedString(database.mongo.password, true)}
    
    # Dynamic - Services - Assessment
    services.question-authoring=${noURLProvidedString(services.services.questionAuthoring, true)}
    services.quiz-authoring=${noURLProvidedString(services.services.quizAuthoring, true)}
    services.delivery=${noURLProvidedString(services.services.delivery, true)}
    services.assessment-admin=${noURLProvidedString(services.services.admin, true)}

    # Dynamic - Services - MeghSikshak
    services.course-catalog=${noURLProvidedString(services.services.courseCatalog, true)}
    services.image-sanitizer=${noURLProvidedString(services.services.imageSanitizer, true)}
    services.course-organizer=${noURLProvidedString(services.services.courseOrganizer, true)}
    services.user-activity.url=${noURLProvidedString(services.services.userActivity, true)}
    services.learning-analytics=${noURLProvidedString(services.services.learningAnalytics, true)}
    services.usermanagement=${noURLProvidedString(services.services.userManagement, true)}
    
    #Dynamic - Files
    qti.upload.url=${noURLProvidedString(services.uploads.assessmentQTIUpload, true)}
    file.upload.url=${noURLProvidedString(services.uploads.assessmentFileUpload, true)}
  `;

  return properties
}