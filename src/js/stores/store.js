import { observable, action } from 'mobx';


class LogsStore {
    
    @observable userName = '';
    
    // Hier werden die "personalisierten" Logs gespeichert"
    @observable personalLogs = [];
    

    constructor() {
        this.baseURL = 'http://localhost:3000/';
        
    }


    // Delete
    @action deletePersonalLog(log) {
        console.log("Delete Personal Log: " + JSON.stringify(log));
        // checken ob auch diese Log-Nachricht in personal vorhanden ist. 
        // Eigentlich nicht nötig. Für eventuelle nicht erklärbare Fehler 
        var check = this.personalLogs.filter(fLog => (fLog.ID === log.ID ));
        console.log(check.length);
        console.log("personalLogs: " + JSON.stringify(this.personalLogs));

        if(check.length > 0){
            var newPersonalLog = this.personalLogs.filter(fLog => (fLog.ID !== log.ID ));
            this.personalLogs = newPersonalLog;
            this.maxAmountPersonalLogs = this.personalLogs.length;
            console.log("personalLogs: " + JSON.stringify(this.personalLogs));
            console.log("Delete from DB: " + JSON.stringify(log));
            // Um auch in der Datenbank diesen Log zu löschen
            this.deletingPersonalLogs(log.ID);
        }
        
    }

    
   
   

    // Fetch
     @action fetchLogs() {
        return  fetch(this.baseURL+'api/logs/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        console.log("get request logs");
                        console.log(json);
                        console.log(json.data);
                        //console.log(json.data.length);
                        this.logsFromServer = json.data;
                        this.maxAmountLogs = json.data.length;
                        //this.showLog = json.data[0];
                        
                    });

                } else {
                    this.error = "Error on fetching";
                }
            })
            .catch(
                error => {
                    this.error = "Error on fetching";
                    throw error;
                }
            );
    }
   
 
   


}

const store = new LogsStore();

    export default store;
