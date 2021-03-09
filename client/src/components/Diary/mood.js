import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const cells = [
    [
        {color: '#fe0202', label: 'ENRAGED', value: {x: 0, y: 9}},
        {color: '#ff2603', label: 'PANICKED', value: {x: 1, y: 9}},
        {color: '#ff4403', label: 'STRESSED', value: {x: 2, y: 9}},
        {color: '#ff5f03', label: 'JITTERY', value: {x: 3, y: 9}},
        {color: '#ff7903', label: 'SHOCKED', value: {x: 4, y: 9}},
        {color: '#ffb600', label: 'SUPRISED', value: {x: 5, y: 9}},
        {color: '#ffb600', label: 'UPBEAT', value: {x: 6, y: 9}},
        {color: '#fbce00', label: 'FESTIVE', value: {x: 7, y: 9}},
        {color: '#f8db02', label: 'EXHILERATED', value: {x: 8, y: 9}},
        {color: '#f6e701', label: 'ECSTATIC', value: {x: 9, y: 9}}
    ],
    [
        {color: '#ed0a0b', label: 'LIVID', value: {x: 0, y: 8}},
        {color: '#ee280b', label: 'FURIOUS', value: {x: 1, y: 8}},
        {color: '#ef3f0a', label: 'FRUSTRATED', value: {x: 2, y: 8}},
        {color: '#ee540b', label: 'TENSE', value: {x: 3, y: 8}},
        {color: '#ee6b0b', label: 'STUNNED', value: {x: 4, y: 8}},
        {color: '#f9b805', label: 'HYPER', value: {x: 5, y: 8}},
        {color: '#f7bf02', label: 'CHEERFUL', value: {x: 6, y: 8}},
        {color: '#f5cb06', label: 'MOTIVATED', value: {x: 7, y: 8}},
        {color: '#f3d405', label: 'INSPIRED', value: {x: 8, y: 8}},
        {color: '#f2dd01', label: 'ELATED', value: {x: 9, y: 8}}
    ],
    [
        {color: '#de1214', label: 'FUMING', value: {x: 0, y: 7}},
        {color: '#dd2812', label: 'FRIGHTENED', value: {x: 1, y: 7}},
        {color: '#dd3913', label: 'ANGRY', value: {x: 2, y: 7}},
        {color: '#de4912', label: 'NERVOUS', value: {x: 3, y: 7}},
        {color: '#dd5b11', label: 'RESTLESS', value: {x: 4, y: 7}},
        {color: '#f1b70c', label: 'ENERGIZED', value: {x: 5, y: 7}},
        {color: '#f1be0c', label: 'LIVELY', value: {x: 6, y: 7}},
        {color: '#efc60c', label: 'ENTHUSIASTIC', value: {x: 7, y: 7}},
        {color: '#efcd0d', label: 'OPTIMISTIC', value: {x: 8, y: 7}},
        {color: '#ecd506', label: 'EXCITED', value: {x: 9, y: 7}}
    ],
    [
        {color: '#d01819', label: 'ANXIOUS', value: {x: 0, y: 6}},
        {color: '#d02919', label: 'APPREHENSIVE', value: {x: 1, y: 6}},
        {color: '#d1371a', label: 'WORRIED', value: {x: 2, y: 6}},
        {color: '#d04419', label: 'IRRITATED', value: {x: 3, y: 6}},
        {color: '#d05018', label: 'ANNOYED', value: {x: 4, y: 6}},
        {color: '#edb712', label: 'PLEASED', value: {x: 5, y: 6}},
        {color: '#ecbc11', label: 'HAPPY', value: {x: 6, y: 6}},
        {color: '#ebc212', label: 'FOCUSED', value: {x: 7, y: 6}},
        {color: '#eac811', label: 'PROUD', value: {x: 8, y: 6}},
        {color: '#e9cd0f', label: 'THRILLED', value: {x: 9, y: 6}}
    ],
    [
        {color: '#c21f1e', label: 'REPULSED', value: {x: 0, y: 5}},
        {color: '#c3291e', label: 'TROUBLED', value: {x: 1, y: 5}},
        {color: '#c4331f', label: 'CONCERNED', value: {x: 2, y: 5}},
        {color: '#c43a1d', label: 'UNEASY', value: {x: 3, y: 5}},
        {color: '#c3431e', label: 'PEEVED', value: {x: 4, y: 5}},
        {color: '#e9b716', label: 'PLEASANT', value: {x: 5, y: 5}},
        {color: '#e8bb16', label: 'JOYFUL', value: {x: 6, y: 5}},
        {color: '#e8bd15', label: 'HOPEFUL', value: {x: 7, y: 5}},
        {color: '#e6c215', label: 'PLAYFUL', value: {x: 8, y: 5}},
        {color: '#e6c717', label: 'BLISSFUL', value: {x: 9, y: 5}}
    ],
    [
        {color: '#072dd6', label: 'DISGUSTED', value: {x: 0, y: 4}},
        {color: '#1050ca', label: 'GLUM', value: {x: 1, y: 4}},
        {color: '#1a6bc1', label: 'DISAPPOINTED', value: {x: 2, y: 4}},
        {color: '#2089b8', label: 'DOWN', value: {x: 3, y: 4}},
        {color: '#2aa3ae', label: 'APATHETIC', value: {x: 4, y: 4}},
        {color: '#78bd36', label: 'AT EASE', value: {x: 5, y: 4}},
        {color: '#77bb30', label: 'EASYGOING', value: {x: 6, y: 4}},
        {color: '#79b82a', label: 'CONTENT', value: {x: 7, y: 4}},
        {color: '#77b625', label: 'LOVING', value: {x: 8, y: 4}},
        {color: '#78b521', label: 'FULFILLED', value: {x: 9, y: 4}}
    ],
    [
        {color: '#0c2bb4', label: 'PESSIMISTIC', value: {x: 0, y: 3}},
        {color: '#1646ac', label: 'MOROSE', value: {x: 1, y: 3}},
        {color: '#1c5ea4', label: 'DICOURAGED', value: {x: 2, y: 3}},
        {color: '#21749b', label: 'SAD', value: {x: 3, y: 3}},
        {color: '#298b95', label: 'BORED', value: {x: 4, y: 3}},
        {color: '#5db43a', label: 'CALM', value: {x: 5, y: 3}},
        {color: '#5eb233', label: 'SECURE', value: {x: 6, y: 3}},
        {color: '#5eaf28', label: 'SATISFIED', value: {x: 7, y: 3}},
        {color: '#5fac22', label: 'GRATEFUL', value: {x: 8, y: 3}},
        {color: '#5eab1a', label: 'TOUCHED', value: {x: 9, y: 3}}
    ],
    [
        {color: '#142993', label: 'ALIENATED', value: {x: 0, y: 2}},
        {color: '#1a3d8d', label: 'MISERABLE', value: {x: 1, y: 2}},
        {color: '#1b5088', label: 'LONELY', value: {x: 2, y: 2}},
        {color: '#21749b', label: 'DISHEARTENED', value: {x: 3, y: 2}},
        {color: '#29707b', label: 'TIRED', value: {x: 4, y: 2}},
        {color: '#43ab3e', label: 'RELAXED', value: {x: 5, y: 2}},
        {color: '#43a834', label: 'CHILL', value: {x: 6, y: 2}},
        {color: '#45a226', label: 'RESTFUL', value: {x: 7, y: 2}},
        {color: '#47a01e', label: 'BLESSED', value: {x: 8, y: 2}},
        {color: '#479d14', label: 'BALANCED', value: {x: 9, y: 2}}
    ],
    [
        {color: '#19297d', label: 'DESPONDENT', value: {x: 0, y: 1}},
        {color: '#1b3977', label: 'DEPRESSED', value: {x: 1, y: 1}},
        {color: '#204372', label: 'SULLEN', value: {x: 2, y: 1}},
        {color: '#23526d', label: 'EXHAUSTED', value: {x: 3, y: 1}},
        {color: '#27606a', label: 'FATIGUED', value: {x: 4, y: 1}},
        {color: '#1fa042', label: 'MELLOW', value: {x: 5, y: 1}},
        {color: '#219a36', label: 'THOUGHTFUL', value: {x: 6, y: 1}},
        {color: '#239423', label: 'PEACEFUL', value: {x: 7, y: 1}},
        {color: '#259017', label: 'COMFY', value: {x: 8, y: 1}},
        {color: '#248c0a', label: 'CAREFREE', value: {x: 9, y: 1}}
    ],
    [
        {color: '#1c2763', label: 'DESPAIR', value: {x: 0, y: 0}},
        {color: '#203161', label: 'HOPELESS', value: {x: 1, y: 0}},
        {color: '#213a5f', label: 'DESOLATE', value: {x: 2, y: 0}},
        {color: '#24435c', label: 'SPENT', value: {x: 3, y: 0}},
        {color: '#254c58', label: 'DRAINED', value: {x: 4, y: 0}},
        {color: '#009347', label: 'SLEEPY', value: {x: 5, y: 0}},
        {color: '#008e37', label: 'COMPLACENT', value: {x: 6, y: 0}},
        {color: '#008723', label: 'TRANQUIL', value: {x: 7, y: 0}},
        {color: '#058213', label: 'COZY', value: {x: 8, y: 0}},
        {color: '#027c02', label: 'SERENE', value: {x: 9, y: 0}}
    ],
]


const Mood = (props) => {
    const { toggleMoodMeter, submit } = props;
    const [ mood, setMood ] = useState(null);

    const selectCell = (cell) => {
        setMood(cell);
    }

    const renderCellLabel = (y, x) => {
        try {
            const _cell = cells[9-(y)][x];
            if (_cell && _cell !== undefined) {
                return (<div onClick={() => selectCell(_cell)} className="cell-label">{_cell.label}</div>)
            } else {
                return (<div className="cell-label">-</div>)
            }
        } catch(e) {
            // console.error("renderCellLabel", e);
            return (<div className="cell-label">-</div>)
        }
    }

    const onSubmit = () => {
        submit(mood);
        setMood(null);
        toggleMoodMeter();
    }

    return (
        <Row className="pb-2 d-flex justify-content-center" >
            <Col sm={6} lg={5} className="mood-meter-container d-flex justify-content-center">
                <div>
                    {cells.map((row, rIndex) => {
                        return (
                            <div className="mood-row pl-2" key={`mood-row-${rIndex}`}>
                                {row.map((cell, cIndex) => {
                                    return (
                                        <div 
                                            onClick={() => selectCell(cell)} 
                                            className={cell === mood ? "mood-cell selected" : "mood-cell"} 
                                            style={{backgroundColor: cell.color}} 
                                            key={`mood-cell-${cIndex}`} 
                                        ></div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <h5 className="text-center" ><BsArrowLeft/> Pleasantness <BsArrowRight/></h5>
                    <h5 className="text-center energy-label" ><BsArrowLeft/> Energy <BsArrowRight/></h5>
                </div>
            </Col>

            <Col className="text-center d-flex flex-column justify-content-center">
                {!mood ? (
                    <div>Select a cell</div>
                ) : (
                    <div>
                        <div className="d-flex justify-content-center">
                            {renderCellLabel(mood.value.y + 1, mood.value.x - 1)}
                            {renderCellLabel(mood.value.y + 1, mood.value.x)}
                            {renderCellLabel(mood.value.y + 1, mood.value.x + 1)}
                        </div>
                        <div className="d-flex justify-content-center">
                            {renderCellLabel(mood.value.y, mood.value.x - 1)}
                            <div className="mood-label">{mood.label}</div>
                            {renderCellLabel(mood.value.y, mood.value.x + 1)}
                        </div>
                        <div className="d-flex justify-content-center">
                            {renderCellLabel(mood.value.y - 1, mood.value.x - 1)}
                            {renderCellLabel(mood.value.y - 1, mood.value.x)}
                            {renderCellLabel(mood.value.y - 1, mood.value.x + 1)}
                        </div>

                        <Button onClick={onSubmit} variant="primary" className="mt-4 px-5">Submit <FaPaperPlane/></Button>

                    </div>
                )}
            </Col>

            <Col xs={12}>
                <Button onClick={toggleMoodMeter} block variant="white">Cancel</Button>
            </Col>
        </Row>
    )
}

export default Mood;