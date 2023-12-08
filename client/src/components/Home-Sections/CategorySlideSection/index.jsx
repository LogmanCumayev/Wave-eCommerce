import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// CSS
import 'react-tabs/style/react-tabs.css';
import './Tab.css'
import './TabResponsive.css'
// Components
import SmartphoneTab from './Smartphone-Tab';
import TabletTab from './Tablet-Tab';
import SmartwacthTab from './Smartwatch-Tab';
import HeadphoneTab from './Headphone-Tab';
// React Icons
import { LuSmartphone } from 'react-icons/lu'
import { BsTablet, BsWatch } from 'react-icons/bs'
import { FiHeadphones } from 'react-icons/fi'

const HomeCategorySlideSection = () => {
  return (
    <section className='HomeCategorySlideSection'>
      <div className='HomeCategorySlideSection-header '
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <span>Our Categories</span>
      </div>
      <div className='HomeCategorySlideSection-main-container'>
        <Tabs>
          <TabList>

            <Tab><span className='tab-content tab-content-smartphone'
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <LuSmartphone />Smartphone</span>
            </Tab>

            <Tab>
              <span className='tab-content'
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <BsTablet />Tablet</span>
            </Tab>

            <Tab>
              <span className='tab-content tab-content-smartwatch'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="2000">
                <BsWatch />Smartwatch</span>
            </Tab>

            <Tab>
              <span className='tab-content tab-content-headphone'
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="2000">
                <FiHeadphones />Headphone</span>
            </Tab>
          </TabList>

          <TabPanel>
            <SmartphoneTab />
          </TabPanel>
          <TabPanel>
            <TabletTab />
          </TabPanel>
          <TabPanel>
            <SmartwacthTab />
          </TabPanel>
          <TabPanel>
            <HeadphoneTab/>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default HomeCategorySlideSection