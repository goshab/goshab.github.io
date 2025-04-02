import "./Services.css";

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Button from "./Button";

// import WorkExperience from "./WorkExperience";
import ServiceList from "./ServiceList";

const Services = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="service container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="service__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {ServiceList.map((experience, index) => {
                            const { id, title } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{title  }</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {ServiceList.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                {/* <h2 className="tab__panel-title">
                                    {title} @ {title}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p> */}
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Services;
