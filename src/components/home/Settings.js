import cog from './settingsCog.svg';

function Settings() {
    return (
        <div style={{width: '100%', justifyContent: 'flex-end', display: 'flex'}}>
            <img src={cog} alt="Settings Cog" style={{width: 30, height: 30}}/>
        </div>
    );
}

export default Settings;