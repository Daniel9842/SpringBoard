package edu.escuelaing.arsw.springBoard;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import edu.escuelaing.arsw.springBoard.cache.SavePoints;

@SpringBootTest
class SpringBoardApplicationTests {

	
	public void testCache1() {
		SavePoints cache = SavePoints.getInstance();
		cache.addPositions("{\"newpointsarr\":[]}");
		assertEquals("{\"newpointsarr\":[]}",cache.getPositions());
	}

}
