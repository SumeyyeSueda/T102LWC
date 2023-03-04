public with sharing class LWCaccountCreation {
    

  @AuraEnabled

  public static String createAccount( String accName){

    Account acc = new Account();
    acc.Name =  accName;
    insert acc;


    if(acc.id != null  ){
      return 'Congrats';

    }else{
      return 'error';
    }
      

    }
}