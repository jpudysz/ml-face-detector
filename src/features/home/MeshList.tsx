import React, { RefObject } from 'react'
import { FlatList, Image } from 'react-native'
import { Nullable, Styles } from 'lib/types'
import { SCREEN_WIDTH } from 'lib/common'

type MeshListProps = {
    items: number
}

export class MeshList extends React.Component<MeshListProps> {
    static IMAGE_WIDTH: number = 150

    private currentIndex = 0
    private intervalId: Nullable<number> =  null
    private meshListRef: RefObject<FlatList<number>> = React.createRef<FlatList<number>>()
    private numberOfImagesPerScreen: number = this.numberOfImagesPerScreenSafely

    constructor(props: MeshListProps) {
        super(props)

        this.onTick = this.onTick.bind(this)
        this.renderListItem = this.renderListItem.bind(this)
    }

    componentDidMount() {
        this.intervalId = setInterval(this.onTick, 1500)
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
        }
    }

    get numberOfImagesPerScreenSafely() {
        const numberOfImagesPerScreen  = Math.floor(SCREEN_WIDTH / MeshList.IMAGE_WIDTH)

        return this.props.items >= numberOfImagesPerScreen
            ? numberOfImagesPerScreen
            : 1
    }

    onTick() {
        if (this.meshListRef.current && this.props.items > this.numberOfImagesPerScreen) {
            const isInBounds = this.currentIndex < this.props.items - this.numberOfImagesPerScreen

            const nextIndex = isInBounds
                ? this.currentIndex + 1
                : 0

            this.meshListRef.current.scrollToIndex({
                animated: true,
                index: nextIndex,
            })

            this.currentIndex = nextIndex
        }
    }

    renderListItem() {
        const uri = 'https://i.pravatar.cc/300'

        return (
            <Image
                style={styles.image}
                width={MeshList.IMAGE_WIDTH}
                source={{ uri }}
            />
        )
    }

    render() {
        const data = Array
            .from(new Array(this.props.items))
            .map((_, index) => index)

        return (
            <FlatList
                horizontal
                data={data}
                scrollEnabled={false}
                ref={this.meshListRef}
                initialNumToRender={4}
                keyExtractor={item => `${item}`}
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderListItem}
            />
        )
    }
}

const styles: Styles = {
    image: {
        borderRadius: 5,
        height: 150,
        marginHorizontal: 5
    },
}
