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
                            <td>` + element.price + `</td>
                            <td>` + element.note + `</td>
                            <td>` + element.thanks + `</td>
                        </tr>
                    </tbody>
                `);

                // Summary
                numBuckets = numBuckets + element.bucket;
                numBalls = numBalls + element.ball;

            });

            $('#buckets').text(numBuckets);
            $('#balls').text(numBalls);
            $('#dateModified').text(element.date);
        });
    } catch (e) {
        console.log(e);
    }
});
