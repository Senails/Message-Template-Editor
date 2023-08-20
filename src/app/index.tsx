import { useRef, useState } from 'react';
import { TamplateEditor } from '../MessageTemplateEditor/widgets/TamplateEditor';
import { TamplatePreviewer } from '../MessageTemplateEditor/widgets/TamplatePreviewer';
import { Button } from '../shared/components/Button';
import styles from './index.module.scss';
import { TTamplateStruct } from '../MessageTemplateEditor/types';

export function App(){
    let [editorVisible,setEditorVisible] = useState(false);
    let [previewerVisible,setPreviewerVisible] = useState(false);

    let paramsList = useRef<Array<string>>(["firstname", "lastname", "company", "position"]);
    let template = useRef<TTamplateStruct>({First:"123"})

    function OnclickPreview(){
        setPreviewerVisible(() => !previewerVisible);
    }

    return <div className={styles.App}>
        {/* screen with button */}
        {!editorVisible?<div className={styles.Screen}>
            <div className={styles.CenterOnScreen}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Button name={'Message Editor'} onClick={()=>setEditorVisible(true)}/>
                </div>
            </div>
        </div>:<></>}

        {/* screen with editor */}
        {editorVisible?<div className={styles.Screen}>
            <div className={styles.CenterOnScreen}>
                <div style={{width:"900px",margin:"0 auto"}}>
                    <TamplateEditor
                        params={paramsList.current}
                        onClickClose={()=>setEditorVisible(false)}
                        onClickPreview={OnclickPreview}
                    />
                </div>
            </div>
        </div>:<></>}

        {/* screen with previewer */}
        {previewerVisible?<div className={styles.Screen}>
            <div className={styles.BackBlur}>
                <div className={styles.Modal}>
                    <TamplatePreviewer 
                        params={paramsList.current}
                        onCloseClick={OnclickPreview}
                        tamplate={{First:"123"}}
                    />
                </div>
            </div>
        </div>:<></>}
    </div>
}
