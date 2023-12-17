const heading = React.createElement(
                'Div', { id: 'parent' 
            }, [
                React.createElement(
                    'Div', { id: 'child' 
                }, [
                    React.createElement(
                        'H1', {}, 'Im an H1 Tag'),
                        React.createElement(
                            'H1', {}, 'Im an H1 Tag'),
                            React.createElement(
                                'H1', {}, 'Im an H1 Tag')
                ]),

                React.createElement(
                    'Div', { id: 'child' 
                }, [
                    React.createElement(
                        'H1', {}, 'Im an H2 Tag'),
                        React.createElement(
                            'H1', {}, 'Im an H2 Tag'),
                            React.createElement(
                                'H1', {}, 'Im an H2 Tag')
                ])
            ]);

const root =  ReactDOM.createRoot(
                document.getElementById('root'));
        
root.render(heading);