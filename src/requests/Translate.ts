const TRANSLATION_URI = 'https://chrome-octane-313320.uc.r.appspot.com/';

interface trans_res {
    "translated": string,
}

const Translate = async (text: string, source: string, target: string) => {
    const response = await fetch(TRANSLATION_URI + 'translations/ns', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            text: text,
            source: source,
            target: target
        })
    });

    const translation = await response.json() as trans_res;
    console.log(translation);

    return translation.translated;
}

export default Translate;