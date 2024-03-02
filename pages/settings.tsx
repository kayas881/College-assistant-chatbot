import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';

const SettingsPage: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-auto mt-3">
                    <Link href="/">
                       
                            <BsChevronLeft size={30} style={{ cursor: 'pointer' }} />
                       
                    </Link>
                </div>
                <div className="col-12 col-lg-10 col-xl-8 mx-auto">
                    <h2 className="h3 mb-4 page-title">Settings</h2>
                    <div className="my-4">
                        <hr className="my-4" />
                        <strong className="mb-0">Themes</strong>
                        <p>The following themes:</p>
                        <div className="list-group mb-5 shadow">
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <strong className="mb-0">Dark</strong>
                                        <p className="text-muted mb-0">Coming soon.....</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="alert1" defaultChecked />
                                            <span className="custom-control-label"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <strong className="mb-0">Light Theme</strong>
                                        <p className="text-muted mb-0">Coming soon......</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="alert2" />
                                            <span className="custom-control-label"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <strong className="mb-0">About Us</strong>

                        <p>Sample information about the chatbot...</p>
                        <div className="list-group mb-5 shadow">
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <strong className="mb-0">Version of Chatbot</strong>
                                        <p className="text-muted mb-0">1.0.0</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="custom-control custom-switch">
                                            {/* You can add any switch or control related to chatbot here */}
                                            {/* Example:
                                            <input type="checkbox" className="custom-control-input" id="chatbotSwitch" />
                                            <span className="custom-control-label"></span>
                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <strong className="mb-0">Sample Information</strong>
                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam sed urna bibendum tincidunt quis mollis mauris.</p>
                                    </div>
                                    {/* Add controls or switches related to sample information here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;
