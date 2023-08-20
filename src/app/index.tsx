import { useRef, useState } from 'react';
import { TamplateEditor } from '../MessageTemplateEditor/widgets/TamplateEditor';
import { TamplatePreviewer } from '../MessageTemplateEditor/widgets/TamplatePreviewer';
import { Button } from '../shared/components/Button';
import { TTamplateStruct } from '../MessageTemplateEditor/types';

import styles from './index.module.scss';

export function App(){
    let [editorVisible,setEditorVisible] = useState(false);
    let [previewerVisible,setPreviewerVisible] = useState(false);
    let editorScrolConteiner = useRef<HTMLDivElement>(null)

    let paramsList = useRef<Array<string>>(["firstname", "lastname", "company", "position"]);
    let templateForPreview = useRef<TTamplateStruct|null>({First:"123"})


    function TogleEditorScreen(){
        if (!editorVisible) return setEditorVisible(() => !editorVisible);

        setEditorVisible(() => !editorVisible);
        editorScrolConteiner.current!.scrollTo({top:0})
    }
    function ToglePreview(tamplate: TTamplateStruct|null){
        if (!tamplate) return setPreviewerVisible(() => !previewerVisible);
        if (previewerVisible) return setPreviewerVisible(() => !previewerVisible);

        templateForPreview.current = tamplate;
        setPreviewerVisible(() => !previewerVisible);
    }


    return <div className={styles.App}>
        {/* screen with button */}
        <div className={styles.Screen} style={{top:editorVisible?"-100%":"0"}}>
            <div className={styles.CenterOnScreen}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Button name={'Message Editor'} onClick={TogleEditorScreen}/>
                </div>
            </div>
        </div>

        {/* screen with editor */}
        <div className={styles.Screen} style={{top:!editorVisible?"100%":"0"}}>
            <div ref={editorScrolConteiner} className={styles.CenterOnScreen}>
                <div style={{maxWidth:"900px",margin:"0 auto"}}>
                    <TamplateEditor
                        params={paramsList.current}
                        onClickClose={TogleEditorScreen}
                        onClickPreview={ToglePreview}
                    />
                </div>
            </div>
        </div>

        {/* screen with preview */}
        {previewerVisible?<div className={styles.Screen}>
            <div className={styles.BackBlur}>
                <div className={styles.Modal}>
                    <TamplatePreviewer 
                        params={paramsList.current}
                        onCloseClick={()=>{ToglePreview(null)}}
                        tamplate={templateForPreview.current!}
                    />
                </div>
            </div>
        </div>:<></>}
    </div>
}
