// DATA URL     https://343505-26.web.fhgr.ch/api/gaming/data
// USER URL     https://343505-26.web.fhgr.ch/api/gaming/user/%7Buserid%7D
// USERS URL    https://343505-26.web.fhgr.ch/api/gaming/user






// Daten von API abfragen /data
// const getData = async() => {
//     const request = await fetch('https://343505-26.web.fhgr.ch/api/gaming/data/1');
//     const data = await request.json();
//     if (data !== null) { return data } else {alert("Nothing found.")}
// }

// getData().then(daten => { console.log(daten)})

// // POST Befehl

// // Daten die hochgeladen werden sollen
// const params = {
//     "dataid" : 1 ,
//     "anythingelse..." : "lots of data"}















//postData mit obigen params
// const postData = async () => {
//     const rawResponse = await fetch('https://343505-26.web.fhgr.ch/api/gaming/data', {
//       method: 'POST',
//       headers: 
//         { 'Content-Type': 'application/json' }
//       ,
//       body: JSON.stringify(params)
//     });
//     const content = await rawResponse.json();
  
//     console.log(content);
//   };

//   postData()



/*

paths: 

  /data:
    get: 
      tags: 
        - "Data"
      operationId: getAllData
      summary: "get all data"
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Data"
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    post: 
      tags: 
        - "Data"
      operationId: postData
      summary: "add new data"
      parameters:
        - in: query
          name: body
          required: true
          description: data
          schema:
            $ref: "#/components/schemas/Data"

            components:
                schemas:
                    Data:
                    type: object
                    properties:
                        dataid:
                        type: string
                        description: dataid
                        anythingelse...: 
                        type: string
                        description: any other data
          
      responses: 
        200: 
          description: "Ok"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    put: 
      tags: 
        - "Data"
      operationId: putData
      summary: "overrides data"
      parameters:
        - in: query
          name: body
          required: true
          description: data
          schema:
            $ref: "#/components/schemas/Data"
          
      responses: 
        200: 
          description: "Ok"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    patch: 
      tags: 
        - "Data"
      operationId: patchData
      summary: "overrides partial data"
      parameters:
        - in: query
          name: body
          required: true
          description: data
          schema:
            $ref: "#/components/schemas/Data"
          
      responses: 
        200: 
          description: "Ok"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 

  /data/{dataid}:
    get: 
      tags: 
        - "Data"
      operationId: getData
      summary: "get all data by id"
      parameters: 
        - in: path
          name: dataid
          required: true
          description: dataid of data
          schema:
            type: string
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Data"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    delete: 
      tags: 
        - "Data"
      operationId: deleteData
      summary: "deletes data by id"
      parameters: 
        - in: path
          name: dataid
          required: true
          description: dataid of data
          schema:
            type: string
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Data"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
  /user:
    get: 
      tags: 
        - "User"
      operationId: getAllUser
      summary: "get all user"
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    anythingelse...: 
                      type: string
                      description: any other data
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    post: 
      tags: 
        - "User"
      operationId: postUser
      summary: "add new user"
      parameters:
        - in: query
          name: body
          required: true
          description: user
          content:
            application/json:
              schema:
                type: object
                properties:
                  userid:
                    type: string
                    description: userid
                  username:
                    type: string
                    description: username
                  password:
                    type: string
                    description: users password
                  anythingelse...: 
                    type: string
                    description: any other data
          
      responses: 
        200: 
          description: "Ok"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    put: 
      tags: 
        - "User"
      operationId: putUser
      summary: "overrides user"
      parameters:
        - in: query
          name: body
          required: true
          description: user
          schema:
            $ref: "#/components/schemas/User"
          
      responses: 
        200: 
          description: "Ok"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    patch: 
      tags: 
        - "User"
      operationId: patchUser
      summary: "overrides partial user"
      parameters:
        - in: query
          name: body
          required: true
          description: user
          schema:
            $ref: "#/components/schemas/User"
          
      responses: 
        200: 
          description: "Ok"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
  /user/{userid}:
    get: 
      tags: 
        - "User"
      operationId: getUser
      summary: "get user by id"
      parameters: 
        - in: path
          name: userid
          required: true
          description: userid of user
          schema:
            type: string
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
    delete: 
      tags: 
        - "User"
      operationId: deleteUser
      summary: "deletes user by id"
      parameters: 
        - in: path
          name: userid
          required: true
          description: userid of user
          schema:
            type: string
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
        400:
          description: "Bad request - Id missing" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
  /login: 
    post: 
      tags: 
        - "User"
      operationId: Login
      summary: "logs into account"
      parameters:
        - in: query
          name: body
          description: login data
          schema:
            type: object
            required:
              - username
              - password
            properties:
              userName:
                type: string
              password:
                type: string
      responses: 
        200: 
          description: "Ok"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
        401:
          description: "Unauthorized - Incorrect Credentials" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
  /logout/{userid}:
    get: 
      tags: 
        - "User"
      operationId: Logout
      summary: "logs user out"
      parameters: 
        - in: path
          name: userid
          required: true
          description: userid of user
          schema:
            type: string
      responses: 
        204:
          description: "No Content - Logged Out" 
        400:
          description: "Bad request - User not found" 
        404:
          description: "Not Found - Data not found"
        500:
          description: "Internal Server Error" 
components:
  schemas:
    Data:
      type: object
      properties:
        dataid:
          type: string
          description: dataid
        anythingelse...: 
          type: string
          description: any other data
    User:
      type: object
      properties:
        userid:
          type: string
          description: userid
        anythingelse...: 
          type: string
          description: any other data
      
*/