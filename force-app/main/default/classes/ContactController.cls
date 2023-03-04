public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
 public static List<contact> getContactList(){
return [SELECT id,Name  FROM contact LIMIT 5] ;
 }
}