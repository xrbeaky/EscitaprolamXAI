#Predictive model from GENDEP data 
#Antidepressant drug-specific prediction of depression treatment outcomes from genetic and clinical variables.
#Raquel Iniesta raquel.iniesta@kcl.ac.uk

#Use the model to estimate the probability of remission (yes or not) for a patient of depression after 12 weeks of treatment with Nortriptyline. 
#List of baseline predictors that are necessary for the prediction: 

#GENETIC variables: SNP variants coded as 0,1,2 where 0:Homozygous for minor allele; 1:Heterozygous; 2:Homozygous for major allele
#rs6794400 
#rs79693177 
#rs12874087 
#rs2345113 
#rs17091959 
#rs10792321 
#rs199561596 
#rs144829540 
#rs149619279 
#rs34319049 
#rs151132095 
#rs37596 
#rs8053632 
#rs111685823 
#rs4279984 
#rs17057129 
#rs5889536 
#rs34841556 
#rs4773117 
#rs8082631 


#Install the latest version of R from https://cran.r-project.org 

#Copy and paste instructions from STEP 1 and STEP 2 in the R console:

#######STEP 1. Data update.
#Please supply the values for a specific patient. You must replace 0 values by the current patient measurements.
#Then copy and paste in the R console.

rs6794400<-0 
rs79693177<-0  
rs12874087<-0  
rs2345113<-0  
rs17091959<-0  
rs10792321<-0  
rs199561596<-0  
rs144829540<-0  
rs149619279<-0  
rs34319049<-0  
rs151132095<-0  
rs37596<-0  
rs8053632<-0  
rs111685823<-0  
rs4279984<-0  
rs17057129<-0  
rs5889536<-0  
rs34841556<-0  
rs4773117<-0  
rs8082631<-0  

#######STEP 2. Computation of probability of remission 
#Next code lines allow to estimate the probability of remission for an indidivual patient. 
#Please do not modify any value in the code!! Copy and paste in the R console.
#The final computation for the probability of remission will be stored in the object "prob.remission".

#do not modify!!
model.coefficients<-c(-0.034749901,-0.034297552,-0.026953497,-0.027946186,-0.028866071,-0.031566292,-0.032799314,-0.041680584,
                      -0.034297653,-0.025278275,-0.019766966,-0.024609218,-0.024995494,-0.016041970,-0.005547687,-0.005570361,
                      -0.008742997,-0.014872395,0.014553246,0.012370682,0.015627477)

#do not modify!!
predictors_mean_ingendep<-c(1.875912,1.890511,1.445255,1.576642,1.605839,1.839416,1.751825,1.875912,1.693431,1.956204,1.846715,1.627737,1.875912,
                            1.927007,1.941606,1.576642,1.897810,1.087591,1.905109,1.503650)

#do not modify!!
predictors_sd_ingendep<-c(0.3308913,0.3360417,0.6053646,0.5780625,0.5471539,0.4064476,0.4817404,0.3308913,0.4627610,0.2053911,0.4001932,
                          0.5001073,0.3524130,0.3123685,0.2353478,0.5906456,0.3273034,0.7016205,0.3181567,0.6198207)

predictors<-c(rs199561596,rs79693177,rs12874087,rs2345113,rs17091959,rs10792321,rs6794400,rs144829540,rs8053632,rs34319049,
              rs151132095,rs37596,rs149619279,rs111685823,rs4279984,rs17057129,rs5889536,rs34841556,rs4773117,rs8082631 )


predictors.std<-(predictors-predictors_mean_ingendep)/predictors_sd_ingendep

logit<-model.coefficients[1]+sum(predictors.std*model.coefficients[2:21])

prob.remission<-exp(logit)/(1+exp(logit))

prob.remission