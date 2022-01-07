import Collapse from "../components/common/collapse";
import React from "react";
import HOCExample from "../components/examples/hoc/hocExample";
import CardWrapper from "../components/common/Card";
import HocExercise from "../components/exercises/hocExercise";
import BlockQuoteWrapper from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";
import Divider from "../components/common/divider";
import withLogin2 from "../components/examples/hoc/withLogin2";
import withPropsStyles from "../components/examples/hoc/withPropsStyles";
import SimpleComponent from "../components/examples/hoc/simpleComponent";

const HOCLayout = () => {
    const ComponentWithAuth = withLogin2(SimpleComponent);
    const NewComponent = withPropsStyles(ComponentWithAuth);

    return (
        <>
            <Title>HOC</Title>
            <Collapse title="Информация">
                <BlockQuoteWrapper>
                    <p>
                        Аргументы: callBack , [array of dependencies]
                        <br />
                        Возвращает: Закэшированное значение выполненной функции,
                        которое обновляется только при изменении зависимостей.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </Collapse>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> add{" "}
                <code>&quot;react/display-name&quot;: &quot;off&quot;</code> to
                EsLint rules
            </CardWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <HOCExample />
            <Divider />
            <Subtitle>Упражнения</Subtitle>
            <HocExercise />
            <NewComponent />
        </>
    );
};
export default HOCLayout;
