public with sharing class accountSearchEngine {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccountRecords( String accName){
         String filter = '%'+accName+'%';
        return [SELECT id,name FROM account WHERE name LIKE : filter ];


    }
}