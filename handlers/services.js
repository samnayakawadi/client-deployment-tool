import { encryptText } from "./jasypt.js";

export const questionAuthoring = (data) => {

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
    keycloak.auth-server-url=${services.keycloak.serverUrl}
    keycloak.realm=${services.keycloak.realm}
    keycloak.resource=${services.keycloak.resource}
    
    # Dynamic - MongoDB
    spring.data.mongodb.host=${database.mongo.host}
    spring.data.mongodb.authentication-database=${database.mongo.authenticationDatabase}
    spring.data.mongodb.username=${database.mongo.username}
    spring.data.mongodb.password=${database.mongo.password}
    
    # Dynamic - Services
    ngel.course-catalog.url=${services.services.courseCatalog}
    assessment.quiz.authoring=${services.services.quizAuthoring}
    image.sanitizer=http://meghs1.hyderabad.cdac.in
    
    #Dynamic - Files
    qti.upload.url=${services.uploads.assessmentQTIUpload}
    file.upload.url=${services.uploads.assessmentFileUpload}
  `;

  return properties
}