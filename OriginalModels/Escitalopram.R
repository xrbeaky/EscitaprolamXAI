#Predictive model from GENDEP data 
#Antidepressant drug-specific prediction of depression treatment outcomes from genetic and clinical variables.
#Raquel Iniesta raquel.iniesta@kcl.ac.uk

#Use the model to estimate the probability of remission (yes or not) for a patient of depression after 12 weeks of treatment with Escitalopram.
#List of baseline predictors that are necessary for the prediction: 

#CLINICAL variables:
#appetite defined as in R. Uher et al. Depression symptom dimensions as predictors of antidepressant treatment outcome: replicable evidence for interest-activity symptoms Psychol. Med., 42 (2012), pp. 967–980
#BDI_changes_sleep is the score for BDI item number
#HRSD_13 is the score for HRSD-17 item number 13
#interest_activity_dimension defined as in R. Uher et al. Depression symptom dimensions as predictors of antidepressant treatment outcome: replicable evidence for interest-activity symptoms Psychol. Med., 42 (2012), pp. 967–980
#HRSD_total is the total score for HRSD-17
#SCAN_fatigability is the the score for SCAN item fatigability

#GENETIC variables: SNP variants coded as 0,1,2 where 0:Homozygous for minor allele; 1:Heterozygous; 2:Homozygous for major allele
#rs1392611 
#rs10812099 
#rs1891943 
#rs151139256 
#rs11002001 
#rs62182022 
#rs28373080 
#rs7757702 
#rs76557116 
#rs9557363 
#rs2704022 

model.coefficients<-c(-0.018595926,-0.036970804,-0.037494038,-0.003203991,-0.033419381,-0.035164398,-0.015327153,-0.029090814,-0.032467316,
                      -0.017888137,-0.037494134,0.032473920,-0.019367106,0.020377797,0.017466538,0.032473995,-0.021702248,0.039596562)

predictors_mean_ingendep<-c(0.8357628,1.6223776,1.5734266,0.6386217,24.1856829,2.1748252,1.8041958,1.8181818,1.7342657,1.6223776,1.2377622,1.8671329,
                            1.4195804,1.2027972,1.2377622,1.8671329,1.0769231)

predictors_sd_ingendep<-c(0.6302054,0.9329961,0.5628087,0.7176169,5.8649321,0.8249173,0.4321375,0.4218731,0.4886176,0.9329961,0.6813206,0.3406242,0.6756592,
                          0.6875087,0.6813206,0.3607067,0.7128293)

#added to original model - plugging in generated random patient data, outputting predictions
patientData <- read.csv("GeneratedData/RPatientData_1.csv")
predictions <- data.frame(matrix(ncol = 1, nrow = 1000))
for(x in 1:1000){
  predictors<-patientData[x,]
  
  predictors.std<-(predictors-predictors_mean_ingendep)/predictors_sd_ingendep
  
  logit<-model.coefficients[1]+sum(predictors.std*model.coefficients[2:18])
  
  prob.remission<-exp(logit)/(1+exp(logit))
  
  predictions[x,] = prob.remission
}
write.csv(predictions, "RPatientPredictions_1.csv", row.names = FALSE)


#Main references:

#BDI (BECK DEPRESSION INVENTORY): A.T. Beck et al. An inventory for measuring depression Arch. General Psychiatry, 4 (1961), pp. 561–571
#HRSD-17 (HAMILTON RATING SCALE FOR DEPRESSION): M. Hamilton. Development of a rating scale for primary depressive illness. Br. J. Soc. Clin. Psychol., 6 (1967), pp. 278–296 17-items version: http://dcf.psychiatry.ufl.edu/files/2011/05/HAMILTON-DEPRESSION.pdf
#SCAN (SCHEDULES FOR CLINICAL ASSESSMENT IN NEUROPSYCHIATRY): J. K. Wing et al. SCAN. Schedules for Clinical Assessment in Neuropsychiatry. Arch.Gen.Psychiatry, 47 (1990), pp. 589-93
#appetite and interest activity dimension, defined as in R. Uher et al. Depression symptom dimensions as predictors of antidepressant treatment outcome: replicable evidence for interest-activity symptoms Psychol. Med., 42 (2012), pp. 967–980

