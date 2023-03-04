public with sharing class AccountController {
    
  @AuraEnabled(cacheable=true)  
    public static List<Account> getAllAccountRecords(){
        
        /*1.option: 
      List<Account>accList=[SELECT id, name FROM Account];
        return accList;
        */
        //2.option: 
        return [SELECT id, name FROM Account];
        
        /*3.option
      
       String sorgu = 'SELECT id, name FROM Account'
        return database.query(query)
      
   */ }

}