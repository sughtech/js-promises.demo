
function getPromise(millisecs) {
    console.log(millisecs);
    let myPromise = new Promise((resolve, reject) => {
        if (millisecs <= 7000) {
            setDiv(getProgressIndicator());
            let data = getDataArray();
            setTimeout(() => resolve(data), millisecs);
            // resolve(data);
        } else {
            let err = new Error('Specified Waiting Time too long. Please input a shorter time');
            reject(err);
        }
    });
    return myPromise;
}

function getProgressIndicator() {
    return `
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="progress blue">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">Loading</div>
                </div>
            </div>
        </div>
    </div>
    `
}

function setDiv(value) {
    let divElement = document.getElementById('data');
    divElement.innerHTML = value;
}

function handleData(value) {
    let finalData = '';
    value.forEach(element => {
        finalData += '<p>' + element.data + '</p>';
    });
    setDiv(finalData);
}

function handleError(error) {
    let divElement = document.getElementById('data');
    let errMessageHTML = "<p class='error'>An Error Occured!<br>Error Message:<br>" + error.message + "</br>";
    setDiv(errMessageHTML);
}

function manipulateData() {
    let secs = document.getElementById('timeInputField').value;
    if (isNaN(secs) || secs === '') {
        let err = new Error('Format of input is incorrect. Please input a valid value');
        handleError(err);
    } else {
        let myPromise = getPromise(secs * 1000);
        myPromise.then(handleData, handleError);
    }
}

function getDataArray() {
    let mockData = [
        {
            "data": "massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit"
        },
        {
            "data": "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In"
        },
        {
            "data": "mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy"
        },
        {
            "data": "vitae erat vel pede blandit congue. In scelerisque scelerisque dui."
        },
        {
            "data": "nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula."
        },
        {
            "data": "vitae aliquam eros turpis non enim. Mauris quis turpis vitae"
        },
        {
            "data": "erat. Sed nunc est, mollis non, cursus non, egestas a,"
        },
        {
            "data": "sed pede nec ante blandit viverra. Donec tempus, lorem fringilla"
        },
        {
            "data": "Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper"
        },
        {
            "data": "volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean"
        },
        {
            "data": "porttitor interdum. Sed auctor odio a purus. Duis elementum, dui"
        },
        {
            "data": "sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo."
        },
        {
            "data": "sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem"
        },
        {
            "data": "fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies"
        },
        {
            "data": "amet ornare lectus justo eu arcu. Morbi sit amet massa."
        },
        {
            "data": "ante dictum mi, ac mattis velit justo nec ante. Maecenas"
        },
        {
            "data": "Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris"
        },
        {
            "data": "commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus"
        },
        {
            "data": "lacus, varius et, euismod et, commodo at, libero. Morbi accumsan"
        },
        {
            "data": "id, blandit at, nisi. Cum sociis natoque penatibus et magnis"
        },
        {
            "data": "ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,"
        },
        {
            "data": "tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat."
        },
        {
            "data": "Donec feugiat metus sit amet ante. Vivamus non lorem vitae"
        },
        {
            "data": "vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue"
        },
        {
            "data": "amet ultricies sem magna nec quam. Curabitur vel lectus. Cum"
        },
        {
            "data": "mattis ornare, lectus ante dictum mi, ac mattis velit justo"
        },
        {
            "data": "egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta"
        },
        {
            "data": "cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin"
        },
        {
            "data": "arcu ac orci. Ut semper pretium neque. Morbi quis urna."
        },
        {
            "data": "nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet"
        },
        {
            "data": "Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique"
        },
        {
            "data": "magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim"
        },
        {
            "data": "rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida"
        },
        {
            "data": "ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac"
        },
        {
            "data": "Nam interdum enim non nisi. Aenean eget metus. In nec"
        },
        {
            "data": "sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus"
        },
        {
            "data": "eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum"
        },
        {
            "data": "consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate"
        },
        {
            "data": "cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,"
        },
        {
            "data": "et netus et malesuada fames ac turpis egestas. Aliquam fringilla"
        },
        {
            "data": "Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu"
        },
        {
            "data": "aliquet, metus urna convallis erat, eget tincidunt dui augue eu"
        },
        {
            "data": "ac mattis semper, dui lectus rutrum urna, nec luctus felis"
        },
        {
            "data": "egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor"
        },
        {
            "data": "aliquam eros turpis non enim. Mauris quis turpis vitae purus"
        },
        {
            "data": "pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna."
        },
        {
            "data": "vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor"
        },
        {
            "data": "ut erat. Sed nunc est, mollis non, cursus non, egestas"
        },
        {
            "data": "Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus"
        },
        {
            "data": "Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc"
        },
        {
            "data": "Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet,"
        },
        {
            "data": "Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non"
        },
        {
            "data": "orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras"
        },
        {
            "data": "amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,"
        },
        {
            "data": "hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium"
        },
        {
            "data": "vitae sodales nisi magna sed dui. Fusce aliquam, enim nec"
        },
        {
            "data": "nisi. Cum sociis natoque penatibus et magnis dis parturient montes,"
        },
        {
            "data": "semper erat, in consectetuer ipsum nunc id enim. Curabitur massa."
        },
        {
            "data": "Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum"
        },
        {
            "data": "neque non quam. Pellentesque habitant morbi tristique senectus et netus"
        },
        {
            "data": "adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu"
        },
        {
            "data": "turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis"
        },
        {
            "data": "luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc"
        },
        {
            "data": "imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec,"
        },
        {
            "data": "Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi"
        },
        {
            "data": "nisi. Cum sociis natoque penatibus et magnis dis parturient montes,"
        },
        {
            "data": "ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris"
        },
        {
            "data": "enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida."
        },
        {
            "data": "elit sed consequat auctor, nunc nulla vulputate dui, nec tempus"
        },
        {
            "data": "elit elit fermentum risus, at fringilla purus mauris a nunc."
        },
        {
            "data": "tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing,"
        },
        {
            "data": "luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc"
        },
        {
            "data": "consequat, lectus sit amet luctus vulputate, nisi sem semper erat,"
        },
        {
            "data": "amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat."
        },
        {
            "data": "Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra."
        },
        {
            "data": "est ac facilisis facilisis, magna tellus faucibus leo, in lobortis"
        },
        {
            "data": "ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec"
        },
        {
            "data": "vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu."
        },
        {
            "data": "elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et"
        },
        {
            "data": "ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem"
        },
        {
            "data": "risus. Duis a mi fringilla mi lacinia mattis. Integer eu"
        },
        {
            "data": "senectus et netus et malesuada fames ac turpis egestas. Fusce"
        },
        {
            "data": "Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec"
        },
        {
            "data": "at augue id ante dictum cursus. Nunc mauris elit, dictum"
        },
        {
            "data": "magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor"
        },
        {
            "data": "ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate,"
        },
        {
            "data": "nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet"
        },
        {
            "data": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin"
        },
        {
            "data": "pretium neque. Morbi quis urna. Nunc quis arcu vel quam"
        },
        {
            "data": "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non"
        },
        {
            "data": "volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean"
        },
        {
            "data": "dui lectus rutrum urna, nec luctus felis purus ac tellus."
        },
        {
            "data": "eu tempor erat neque non quam. Pellentesque habitant morbi tristique"
        },
        {
            "data": "Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec,"
        },
        {
            "data": "eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum"
        },
        {
            "data": "porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris"
        },
        {
            "data": "id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque"
        },
        {
            "data": "risus. Duis a mi fringilla mi lacinia mattis. Integer eu"
        },
        {
            "data": "In condimentum. Donec at arcu. Vestibulum ante ipsum primis in"
        },
        {
            "data": "facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant"
        }
    ];
    return mockData;
}