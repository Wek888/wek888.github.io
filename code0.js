gdjs.work_32in_32progressCode = {};
gdjs.work_32in_32progressCode.localVariables = [];
gdjs.work_32in_32progressCode.GDBackgroundObjects1= [];
gdjs.work_32in_32progressCode.GDBackgroundObjects2= [];
gdjs.work_32in_32progressCode.GDBackgroundObjects3= [];
gdjs.work_32in_32progressCode.GDTextObjects1= [];
gdjs.work_32in_32progressCode.GDTextObjects2= [];
gdjs.work_32in_32progressCode.GDTextObjects3= [];
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects1= [];
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2= [];
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects3= [];
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects1= [];
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects2= [];
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects3= [];


gdjs.work_32in_32progressCode.asyncCallback9696372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.work_32in_32progressCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Work_in_progress"), gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2);
{for(var i = 0, len = gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2[i].getBehavior("Opacity").setOpacity(gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2[i].getBehavior("Opacity").getOpacity() + (10));
}
}gdjs.work_32in_32progressCode.localVariables.length = 0;
}
gdjs.work_32in_32progressCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.work_32in_32progressCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.work_32in_32progressCode.asyncCallback9696372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.work_32in_32progressCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.work_32in_32progressCode.GDTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.work_32in_32progressCode.GDTextObjects2.length;i<l;++i) {
    if ( gdjs.work_32in_32progressCode.GDTextObjects2[i].getBehavior("AutoTyping").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.work_32in_32progressCode.GDTextObjects2[k] = gdjs.work_32in_32progressCode.GDTextObjects2[i];
        ++k;
    }
}
gdjs.work_32in_32progressCode.GDTextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9693652);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9694356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.work_32in_32progressCode.GDTextObjects2);
{for(var i = 0, len = gdjs.work_32in_32progressCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDTextObjects2[i].getBehavior("Text").setText("Терпение...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9695084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.work_32in_32progressCode.GDTextObjects2);
{for(var i = 0, len = gdjs.work_32in_32progressCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDTextObjects2[i].getBehavior("Text").setText("Терпение... мой друг...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9696236);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.work_32in_32progressCode.GDTextObjects2);
{for(var i = 0, len = gdjs.work_32in_32progressCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDTextObjects2[i].getBehavior("Text").setText("Уже совсем скоро...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.work_32in_32progressCode.GDTextObjects1);
{for(var i = 0, len = gdjs.work_32in_32progressCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.work_32in_32progressCode.GDTextObjects1[i].getBehavior("Opacity").getOpacity() - (10));
}
}
{ //Subevents
gdjs.work_32in_32progressCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.work_32in_32progressCode.eventsList2 = function(runtimeScene) {

{


gdjs.work_32in_32progressCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.work_32in_32progressCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Work_in_progress"), gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects1);
{for(var i = 0, len = gdjs.work_32in_32progressCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDBackgroundObjects1[i].play();
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Mus_ANOTHER_HIM.mp3", 66, false, 50, 1);
}{for(var i = 0, len = gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects1.length ;i < len;++i) {
    gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.work_32in_32progressCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.work_32in_32progressCode.GDBackgroundObjects1.length = 0;
gdjs.work_32in_32progressCode.GDBackgroundObjects2.length = 0;
gdjs.work_32in_32progressCode.GDBackgroundObjects3.length = 0;
gdjs.work_32in_32progressCode.GDTextObjects1.length = 0;
gdjs.work_32in_32progressCode.GDTextObjects2.length = 0;
gdjs.work_32in_32progressCode.GDTextObjects3.length = 0;
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects1.length = 0;
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2.length = 0;
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects3.length = 0;
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects1.length = 0;
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects2.length = 0;
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects3.length = 0;

gdjs.work_32in_32progressCode.eventsList2(runtimeScene);
gdjs.work_32in_32progressCode.GDBackgroundObjects1.length = 0;
gdjs.work_32in_32progressCode.GDBackgroundObjects2.length = 0;
gdjs.work_32in_32progressCode.GDBackgroundObjects3.length = 0;
gdjs.work_32in_32progressCode.GDTextObjects1.length = 0;
gdjs.work_32in_32progressCode.GDTextObjects2.length = 0;
gdjs.work_32in_32progressCode.GDTextObjects3.length = 0;
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects1.length = 0;
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects2.length = 0;
gdjs.work_32in_32progressCode.GDWork_9595in_9595progressObjects3.length = 0;
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects1.length = 0;
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects2.length = 0;
gdjs.work_32in_32progressCode.GDWek888_9595_9595_95952025Objects3.length = 0;


return;

}

gdjs['work_32in_32progressCode'] = gdjs.work_32in_32progressCode;
