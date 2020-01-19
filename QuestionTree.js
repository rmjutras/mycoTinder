class QuestionNode {
    constructor(text, ifyes, ifno) {
        this.text = text;
        this.ifno = ifno;
        this.ifyes = ifyes;
    }
};

export default new QuestionNode(
    'Does your lil guy have a stem?',
    new QuestionNode(
        'Does your lil guy have gills?',
        new QuestionNode(
            'Does it have an annulus?',
            new QuestionNode(
                'Amanita or some shit gl',
                null,
                null
            ),
            new QuestionNode(
                'Who knowsss',
                null,
                null
            )
        ),
        new QuestionNode(
            'Who knowsss 2',
            null,
            null
        )
    ),
    new QuestionNode('Polyporales', null, null)
);