$(window).on('load', function () {
    try {
        $.get('summary.yml', function (result) {
            const doc = jsyaml.load(result);
            var numBuckets = 0;
            var numBalls = 0;
            doc.badmintons.forEach((element, i) => {
                // Update the table
                $("#records thead").before(`
                    <tbody>
                        <tr>
                            <td>` + element.date + `</td>
                            <td>` + (element.price === "" ? '-' : element.price) + `</td>
                            <td>` + (element.note === "" ? '-' : element.note) + `</td>
                            <td>` + (element.thanks === "" ? '-' : element.thanks) + `</td>
                        </tr>
                    </tbody>
                `);

                // Summary
                numBuckets = numBuckets + (element.bucket === "" ? 0 : element.bucket);
                numBalls = numBalls + element.ball;

                // Update last modified
                if (i === doc.badmintons.length - 1) {
                    $('#dateModified').text(element.date);
                }
            });

            $('#buckets').text(numBuckets);
            $('#balls').text(numBalls);
        });
    } catch (e) {
        console.log(e);
    }
});
