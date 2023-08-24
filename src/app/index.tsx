import { useRef, useState } from 'react';
import { TamplateEditor } from '../MessageTemplateEditor/widgets/TamplateEditor';
import { TamplatePreviewer } from '../MessageTemplateEditor/widgets/TamplatePreviewer';
import { Button } from '../shared/components/Button';
import { TTamplateConfig } from '../MessageTemplateEditor/types';

import styles from './index.module.scss';
import { MouseHoverHint } from '../shared/components/MouseHoverHint';

export function App(){
    let [editorScreen, seteditorScreen] = useState(false);
    let [editorVisible, setEditorVisible] = useState(false);

    let [previewerVisible, setPreviewerVisible] = useState(false);
    let editorScrolConteiner = useRef<HTMLDivElement>(null);

    let paramsList = useRef<string[]>(GetParamsFromStorage());
    let templateForPreview = useRef<TTamplateConfig|null>(null);


    function TogleEditorScreen(){
        templateForPreview.current = GetTamplateFromStorage();
        if (!editorScreen){
            setEditorVisible(() => !editorVisible);
            seteditorScreen(() => !editorScreen);
            return;
        }
        seteditorScreen(() => !editorScreen);
        setTimeout(() => setEditorVisible(() => !editorVisible),270);
        editorScrolConteiner.current!.scrollTo({top: 0})
        
    }
    function ToglePreview(tamplate: TTamplateConfig|null){
        if (!tamplate || previewerVisible) return setPreviewerVisible(false);
        templateForPreview.current = tamplate;
        paramsList.current = tamplate.ParamList;
        setPreviewerVisible(true);
    }


    async function SaveTamplate(tamplate: TTamplateConfig){
        localStorage.setItem("template", JSON.stringify(tamplate));
    }
    function GetParamsFromStorage():string[]{
        let json = localStorage.getItem("arrVarNames");
        return json ? JSON.parse(json) : ["firstname", "lastname", "company", "position"];
    }
    function GetTamplateFromStorage(){
        let json = localStorage.getItem("template");
        return json ? JSON.parse(json) : null;
    }
    

    return <div className={styles.App}>
        {/* screen with button */}
        <div className={styles.Screen} style={{top: editorScreen ? "-100%" : "0"}}>
            <div className={styles.CenterOnScreen}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <MouseHoverHint text='Открыть редактор шаблонов'>
                        {/* <div style={{height:"300px",width:"300px", border:"1px solid red"}}>
                        <Button name={'Message Editor'} onClick={editorVisible ? ()=>{} : TogleEditorScreen}/>
                        </div> */}
                        <Button name={'Message Editor'} onClick={editorVisible ? ()=>{} : TogleEditorScreen}/>
                    </MouseHoverHint>
                </div>
            </div>
        </div>

        {/* screen with editor */}
        <div className={styles.Screen} style={{top: !editorScreen ? "100%" : "0"}}>
            <div className={styles.CenterOnScreen} ref={editorScrolConteiner}>
                <div style={{maxWidth: "800px",margin: "0 auto"}}>
                    {editorVisible?<TamplateEditor
                        params={paramsList.current}
                        tamplate={templateForPreview.current!}
                        onClickClose={TogleEditorScreen}
                        onClickPreview={ToglePreview}
                        callbackSave={SaveTamplate}
                    />:<></>}
                </div>
            </div>
        </div>

        {/* screen with preview */}
        {previewerVisible?<div className={styles.Screen}>
            <div className={styles.BlackBlur}>
                <div className={styles.Modal}>
                    <div className={styles.CenterOnScreen} >
                        <div style={{height: "10px"}}></div>
                        <TamplatePreviewer 
                            params={paramsList.current}
                            onCloseClick={() => {ToglePreview(null)}}
                            tamplate={templateForPreview.current!}
                        />
                        <div style={{height: "10px"}}></div>
                    </div>
                </div>
            </div>
        </div>:<></>}
    </div>
}
