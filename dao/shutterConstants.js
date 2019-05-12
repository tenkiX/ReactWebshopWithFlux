module.exports = {
    dbName : 'shuttershop',
    collections : {
        order : {
            customerId : "customerId",
            contactEmail : "contactEmail",
            address : "address",
            installDate:"installDate",
            order : [
                {
                    shutterType : "shutterType",
                    windowHeight : "windowHeight",
                    windowWidth : "windowWidth",
                    windowType : "windowType",
                    orderedPieces : "orderedPieces",
                    isJobFinished : "isJobFinished"
                }
            ],
            isPaid : "false"
        },
        date : "date"
}};

