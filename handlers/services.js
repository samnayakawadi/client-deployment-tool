import { encryptText } from "./jasypt";

export const questionAuthoring = (data) => {
  const keycloakAuthServerUrl = encryptText(data.keycloak.serverUrl)

  const questionAuthoring = `
    #Thu Jan 25 11:09:19 IST 2024
    tomcat.ajp.enabled=true
    tomcat.ajp.port=9093
    keycloak.auth-server-url=ENC(${keycloakAuthServerUrl})
    keycloak.realm=cakes
    ngel.course-catalog.url=http://megh3.hyderabad.cdac.in:8085
    server.error.whitelabel.enabled=false
    spring.data.mongodb.host=localhost
    spring.servlet.multipart.enabled=true
    assessment.quiz.authoring=http://10.244.2.206:8094
    spring.data.mongodb.authentication-database=admin
    spring.data.mongodb.username=ENC(2osCJTJI/zYHN5m/wFYkZg==)
    keycloak.bearer-only=true
    server.port=8093
    spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration
    keycloak.ssl-required=external
    tomcat.ajp.remoteauthentication=false
    image.sanitizer=http://meghs1.hyderabad.cdac.in
    qti.upload.url=C:\\Users\\samnayakawadi\\Downloads\\QTI Conversion Service\\QuizDelivery\\
    spring.servlet.multipart.max-file-size=50MB
    spring.data.mongodb.port=27017
    tomcat.ajp.secret=tmis123$
    keycloak.resource=cakesldap
    keycloak.public-client=true
    keycloak.use-resource-role-mappings=true
    spring.servlet.multipart.max-request-size=100MB
    spring.data.mongodb.database=ENC(p3MAh0y9tETAUPtyF5MWu451r9nqNm/Hv89UbN8F0pA=)
    spring.data.mongodb.password=ENC(FOrcYjWo3G9jiUXPHwbjzeSMQ5uJad5m)
    file.upload.url=D:\\Uploaded Files by Question Authoring\\
  `;

  return questionAuthoring
}

const dbJsonEncrypterUsingJasypt = (data) => {
  const encryptedJson = {
    "services": {
      "questionAuthoring": `ENC(${encryptText(data.services.questionAuthoring)})`,
      "quizAuthoring": `ENC(${encryptText(data.services.quizAuthoring)})`,
      "delivery": `ENC(${encryptText(data.services.delivery)})`,
    }
  }
}