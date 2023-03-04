public with sharing class AccountSearchEngineImperative {
  //  @AuraEnabled(cacheable=true)
  @AuraEnabled

    public static List<Account> getAllAccountRecords( String accName){


         String filter = '%'+accName+'%';

        return [SELECT id,name FROM account WHERE name LIKE :filter ];

    }
}